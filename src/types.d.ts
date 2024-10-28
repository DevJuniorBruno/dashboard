'use client'

interface LoteriaProps {
    loteria: string;
    concurso: number;
    data: string; // Pode ser 'string' ou 'Date'
    local: string;
    dezenasOrdemSorteio: string[];
    dezenas: string[];
    trevos: string[];
    timeCoracao: null | string; // Pode ser null ou string
    mesSorte: null | string; // Pode ser null ou string
    premiacoes: Premiacao[];
    estadosPremiados: string[];
    observacao: string;
    acumulou: boolean;
    proximoConcurso: number;
    dataProximoConcurso: string; // Pode ser 'string' ou 'Date'
    localGanhadores: string[];
    valorArrecadado: number;
    valorAcumuladoConcurso_0_5: number;
    valorAcumuladoConcursoEspecial: number;
    valorAcumuladoProximoConcurso: number;
    valorEstimadoProximoConcurso: number;
}

interface Premiacao {
    descricao: string;
    faixa: number;
    ganhadores: number;
    valorPremio: number;
}

