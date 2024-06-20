import  prismaClient  from "../../prisma";

interface LocalRequest{
    name: string;
    state: string;
    city: string;
    reference1: string;
}

class CreateLocalService{

    async execute({name, state, city, reference1}: LocalRequest){
        if(!name || !state || !city){
            throw new Error("Incomplete Data");
        }

    await prismaClient.local.create({
        data:{
            name_Local: name,
            state: state,
            city: city,
        //    reference1: reference1,
        }
    });


    }
}

export { CreateLocalService }; 