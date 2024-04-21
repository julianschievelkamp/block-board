import { useEffect, useRef } from "react";
import { Vertex } from "data/types";
import { clampNumber, getMaxValue, getMinValue } from "utils/helpers";

import { Canvas } from "./styles";

export interface LineChartProps {
    data: number[] | undefined;
}

const LineChart = ({ data }: LineChartProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const getVertices = (ctx: CanvasRenderingContext2D, data: number[]) => {
            let vertices: Vertex[] = [];

            const yMin = getMinValue(data);
            const yMax = getMaxValue(data);

            const xRange =
                ctx.canvas.width / clampNumber(data.length - 1, 1, data.length);
            const yRange =
                ctx.canvas.height / clampNumber(yMax - yMin, 1, yMax);

            for (let i = 0; i < data.length; i++) {
                const xCoord = xRange * i;
                const yCoord = yRange * (data[i] - yMin);

                vertices.push({
                    x: xCoord,
                    y: yCoord,
                });
            }

            return vertices;
        };

        const drawLine = (
            ctx: CanvasRenderingContext2D,
            vertices: Vertex[]
        ) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.lineWidth = 2;
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

    return <Canvas height="36" width="144" ref={ref} />;
};

export default LineChart;
