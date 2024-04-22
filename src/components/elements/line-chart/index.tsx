import { useEffect, useRef, useState } from "react";

import Div from "components/elements/div";
import Text from "components/elements/text";

import { Vertex } from "data/types";
import {
    clampNumber,
    formatChange,
    getMaxValue,
    getMinValue,
} from "utils/helpers";

import { Canvas } from "./styles";

export interface LineChartProps {
    data: number[] | undefined;
}

const LineChart = ({ data }: LineChartProps) => {
    const [change, setChange] = useState(0);
    const [color, setColor] = useState("");

    const ref = useRef(null);

    useEffect(() => {
        const getVertices = (ctx: CanvasRenderingContext2D, data: number[]) => {
            let vertices: Vertex[] = [];

            const margin = 4;
            const xPixelRange = ctx.canvas.width - margin * 2;
            const yPixelRange = ctx.canvas.height - margin * 2;
            const yMin = getMinValue(data);
            const yMax = getMaxValue(data);

            const xRange =
                xPixelRange / clampNumber(data.length - 1, 1, data.length);
            const yRange = yPixelRange / clampNumber(yMax - yMin, 1, yMax);

            for (let i = 0; i < data.length; i++) {
                vertices.push({
                    x: xRange * i + margin,
                    y: ctx.canvas.height - (yRange * (data[i] - yMin) + margin),
                });
            }

            return vertices;
        };

        const drawLine = (
            ctx: CanvasRenderingContext2D,
            vertices: Vertex[],
            color: string
        ) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.lineWidth = 8;
            ctx.strokeStyle = color;

            for (let i = 1; i < vertices.length; i++) {
                ctx.beginPath();
                ctx.moveTo(vertices[i - 1].x, vertices[i - 1].y);
                ctx.lineTo(vertices[i].x, vertices[i].y);
                ctx.stroke();
            }
        };

        if (data) {
            const canvas: HTMLCanvasElement = ref.current!;
            const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

            const vertices = getVertices(ctx, data);
            const color = data[0] < data[data.length - 1] ? "green" : "red";

            // TODO: set change
            setChange(0.5);
            setColor(color);
            drawLine(ctx, vertices, color);
        }
    }, [data]);

    return (
        <Div display="flex" alignItems="center">
            <Canvas height="128" width="512" ref={ref} />
            <Text color={color} fontSize="0.75rem" margin="0 0 0 0.5rem">
                {formatChange(change)}
            </Text>
        </Div>
    );
};

export default LineChart;
