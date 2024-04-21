import { useEffect, useRef } from "react";

import { Vertex } from "data/types";
import { clampNumber, getMaxValue, getMinValue } from "utils/helpers";
import { StyledCanvas } from "./styles";

export interface LineChartProps {
    data: number[] | undefined;
}

const LineChart = ({ data }: LineChartProps) => {
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
            vertices: Vertex[]
        ) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.lineWidth = 8;
            ctx.strokeStyle =
                vertices[0].y > vertices[vertices.length - 1].y
                    ? "green"
                    : "red";

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

            drawLine(ctx, getVertices(ctx, data));
        }
    }, [data]);

    return <StyledCanvas height="128" width="512" ref={ref} />;
};

export default LineChart;
