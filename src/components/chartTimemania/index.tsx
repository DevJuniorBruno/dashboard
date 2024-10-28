"use client";

import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { CartesianGrid, XAxis, Bar, BarChart, YAxis, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

interface ChartData {
    dezena: number;
    count: number;
}

interface ChartLotoOverviewProps {
    data: ChartData[]; // Define a interface para os dados
}

export function ChartTimemaniaOverview({ data }: ChartLotoOverviewProps) {

    const chartConfig = {
        desktop: {
            label: "Contagem de Dezenas",
            color: "pink"
    }
}
    
    useEffect(() => {
        console.log('ChartOverview montado');
    }, []);

    // Verifica se os dados estão disponíveis
    if (!data || data.length === 0) {
        return (
            <Card className='w-full md:w-1/2 md:max-w-[300px] md:h-[400px] '>
                <CardHeader>
                    <div className='flex items-center justify-center'>
                        <CardTitle className='text-lg sm:text-xl text-gray-800'>
                            Contagem de Dezenas
                        </CardTitle>
                        <DollarSign className='ml-auto w-4 h-4' />
                    </div>
                </CardHeader>
                <CardContent>
                    <p>Nenhum dado disponível para exibir.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className='w-full h-full md:1/2 mt-4 mb-4'>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>
                        Contagem de Dezenas
                    </CardTitle>
                    <DollarSign className='ml-auto w-4 h-4' />
                </div>
            </CardHeader>

            <CardContent >
                <ChartContainer config={chartConfig} className='min-h-full w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid vertical={false} />
                            <XAxis 
                                dataKey="dezena"
                                tickLine={false}
                                tickMargin={10}
                            />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="count" fill={chartConfig.desktop.color} radius={4} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
