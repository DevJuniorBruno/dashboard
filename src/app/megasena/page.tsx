'use client';

import api from "@/services/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { ChartMegasenaOverview } from "@/components/chartMegasena";
import { useEffect, useState } from "react";

export default function Home() {
  const [loterias, setLoterias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<{ dezena: number, count: number }[]>([]);
  const [concursoAtual, setConcursoAtual] = useState<any>(null);
  const [proximoConcurso, setProximoConcurso] = useState<string | null>(null);
  const [dataProximoConcurso, setDataProximoConcurso] = useState<string | null>(null);

  useEffect(() => {
    async function loadLoterias() {
      try {
        const API_URL_MEGASENA = "https://loteriascaixa-api.herokuapp.com/api/megasena";
        const megaSenaResponse = await api.get(API_URL_MEGASENA);
        
        const megaSenaData = megaSenaResponse.data;
        console.log(megaSenaData)

        // Processa os dados para contagem das dezenas
        const contagemDezenas = new Array(61).fill(0);
        megaSenaData
          .flatMap((loteria: any) => loteria.dezenas)
          .forEach((dezena: string) => {
            contagemDezenas[parseInt(dezena)]++;
          });

        setChartData(
          contagemDezenas
            .map((count, index) => ({
              dezena: index,
              count,
            }))
            .filter(data => data.count > 0)
        );

        setConcursoAtual(megaSenaData[0]);
        setProximoConcurso(megaSenaData[0].proximoConcurso);
        setDataProximoConcurso(megaSenaData[0].dataProximoConcurso);

      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLoterias();
  }, []);

  if (loading) {
    return <h1 className="m-20" >Carregando...</h1>;
  }

  return (
    <main className="sm:ml-14 p-4">
      <h1 className="m-3" >MEGA-SENA</h1>
      <p className="m-3" >Dezenas : 01 - 60 </p>
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Concurso Atual: {concursoAtual.concurso}
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Data: {concursoAtual.data}</CardDescription>
            <CardContent>
              <p>Valor arrecadado R${concursoAtual.valorArrecadado.toLocaleString()}</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Próximo Concurso: {proximoConcurso}
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Data: {dataProximoConcurso}</CardDescription>
            <CardContent>
              <p>Valor estimado R${concursoAtual.valorEstimadoProximoConcurso.toLocaleString()}</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <ChartMegasenaOverview data={chartData} />

      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">Acumulou 2024</CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total acumulado em prêmios</CardDescription>
            <CardContent>
              <p>+ R$ 300 milhões</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">Acumulou 2023</CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total acumulado em prêmios</CardDescription>
            <CardContent>
              <p>+ R$ 300 milhões</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
