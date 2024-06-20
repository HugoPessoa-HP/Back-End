import prismaClient  from "../../prisma";
import { Prisma , PrismaClient } from "@prisma/client";

interface PlantRequest{
    vernacular1: string;
    vernacular2: string;
    vernacular3: string;
    name_Scientific: string;
}

interface RequestPlantStudentService{
    categoria: string;
}

class PostPlantService{

    async execute({ vernacular1, vernacular2, vernacular3, name_Scientific }: PlantRequest){
        if(!name_Scientific || vernacular1){
            throw new Error("Incomplete Data");
        }

        
        const plantExist = await prismaClient.plant.findFirst({
            where: {
                name_Scientific: name_Scientific,
            }
        });

        if (plantExist) {
            throw new Error("Error");
        }
        
    const planta = await prismaClient.plant.create({
        data:{
            vernacular1: vernacular1,
            vernacular2: vernacular2,
            vernacular3: vernacular3,
            name_Scientific: name_Scientific,
        },
        select:{
            name_Scientific: true,
        }
    });

    console.log(planta);
    return planta;

    }
/*
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
            origem: null,
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
*/
}


export { PostPlantService }; 