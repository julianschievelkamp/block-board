import { useEffect, useRef } from "react";
import { Canvas } from "./styles";

export interface LineChartProps {
    data?: number[];
}

const LineChart = ({ data }: LineChartProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const drawLine = (ctx: CanvasRenderingContext2D, data: number[]) => {};

        if (data) {
            const canvas: HTMLCanvasElement = ref.current!;
            const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

            drawLine(ctx, data);
        }
    }, [data]);

    return <Canvas height="36" width="144" ref={ref} />;
};

export default LineChart;
