import  prismaClient  from "../../prisma";

interface PlantaRequest{
    vernaculo1: string;
    vernaculo2: string;
    vernaculo3: string;
    nome_Cientifico: string;
    familia: string;
    origem: string;
    habito: string;
}

class CreatePlantaService{

    async execute({ vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito}: PlantaRequest){
        if(!vernaculo1 || !vernaculo2 || !vernaculo3){
            throw new Error("Dados Incompletos");
        }

    await prismaClient.planta.create({
        data:{
            vernaculo1: vernaculo1,
            vernaculo2: vernaculo2,
            vernaculo3: vernaculo3,
            nome_Cientifico: nome_Cientifico,
            familia: familia,
            origem: origem,
            habito: habito,
        }
    });


    }
}

class GetPlantaService{
    async ex(){

        const plantas = await prismaClient.planta.findMany({
            select: {
                vernaculo1: true,
                vernaculo2: true,
                familia: true,
                origem: true,
                habito: true
            }
        })
        
        return plantas;
    }
}

export { CreatePlantaService , GetPlantaService }; 