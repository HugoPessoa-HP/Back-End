import prismaClient  from "../../prisma";

interface PlantaRequest{
    vernaculo1: string;
    vernaculo2: string;
    vernaculo3: string;
    nome_Cientifico: string;
    familia: string;
    origem: string;
    habito: string;
    banner: string;
    trilha_id: string;
}

interface RequestPlantaAlunoService{
    origem: string;
    banner: string;
}

class PostPlantaService{

    async executePre({ origem, banner}: RequestPlantaAlunoService){
        if(!origem || !banner){
            throw new Error("Dados Incorretos");
        }

        /*
        const plantaExiste = await prismaClient.planta.findFirst({
            where: {
                nome_Cientifico: nome_Cientifico,
                familia: familia,
            }
        });

        if (plantaExiste) {
            throw new Error("Pesquisador já está cadastrado");
        }
        */

    const planta = await prismaClient.planta.create({
        data:{
            vernaculo1: null,
            vernaculo2: null,
            vernaculo3: null,
            nome_Cientifico: null,
            familia: null,
            origem: origem,
            habito: null,
            banner: banner,
            trilha_id: null,
        },
        select:{
            origem: true,
        }
    });

    return planta;

    }

    async execute({ vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito, banner, trilha_id}: PlantaRequest){
        if(!vernaculo1 || !vernaculo2 || !vernaculo3){
            throw new Error("Dados Incorretos");
        }

        const plantaExiste = await prismaClient.planta.findFirst({
            where: {
                nome_Cientifico: nome_Cientifico,
                familia: familia,
            }
        });

        if (plantaExiste) {
            throw new Error("Pesquisador já está cadastrado");
        }

    const planta = await prismaClient.planta.create({
        data:{
            vernaculo1: vernaculo1,
            vernaculo2: vernaculo2,
            vernaculo3: vernaculo3,
            nome_Cientifico: nome_Cientifico,
            familia: familia,
            origem: origem,
            habito: habito,
            banner: banner,
            trilha_id: null,
        },
        select:{
            origem: true,
        }
    });

    return planta;

    }
}


export { PostPlantaService }; 