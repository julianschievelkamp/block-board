import { useEffect, useRef } from "react";

import { Vertex } from "data/types";
import { getMaxValue, getMinValue } from "utils/helpers";

import { Canvas } from "./styles";

export interface LineChartProps {
    data: number[] | undefined;
    color?: string;
}

const LineChart = ({ data, color = "darkgrey" }: LineChartProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const getVertices = (ctx: CanvasRenderingContext2D, data: number[]) => {
            let vertices: Vertex[] = [];

            const margin = 4;
            const xPixelRange = ctx.canvas.width - margin * 2;
            const yPixelRange = ctx.canvas.height - margin * 2;
            const yMin = getMinValue(data);
            const yMax = getMaxValue(data);

            const xRange = xPixelRange / (data.length - 1);
            const yRange = yPixelRange / (yMax - yMin);

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
            ctx.lineJoin = "round";
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(vertices[0].x, vertices[0].y);
            for (let i = 1; i < vertices.length; i++) {
                ctx.lineTo(vertices[i].x, vertices[i].y);
            }
            ctx.stroke();
        };

        if (data) {
            const canvas: HTMLCanvasElement = ref.current!;
            const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

            drawLine(ctx, getVertices(ctx, data), color);
        }
        // eslint-disable-next-line
    }, [data]);

    return <Canvas height="128" width="512" ref={ref} />;
};

export default LineChart;
