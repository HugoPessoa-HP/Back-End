import  prismaClient  from "../../prisma";

interface LocalRequest{
    nome: string;
    estado: string;
    cidade: string;
    referencia1: string;
    referencia2: string;
}

class CreateLocalService{

    async execute({nome, estado, cidade, referencia1, referencia2}: LocalRequest){
        if(!nome || !estado || !cidade){
            throw new Error("Dados Incompletos");
        }

    await prismaClient.local.create({
        data:{
            nome: nome,
            estado: estado,
            cidade: cidade,
            referencia1: referencia1,
            referencia2: referencia2,
        }
    });


    }
}

export { CreateLocalService }; 