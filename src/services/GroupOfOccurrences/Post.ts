import  prismaClient  from "../../prisma";
interface GpRequest{
    id: string;
    id_Plant: string;
    id_Trail: string;
    category: string;
    family: string;
    origin: string;
    habit: string;
}

class CreateGpService{

    async execute({ id, id_Plant, id_Trail, category, family, origin ,habit }: GpRequest){
        if(!id_Plant || !id_Trail){
            throw new Error("Incomplete Data");
        }

    const i = parseInt(id);
    const i_trail = parseInt(id_Trail);
    const i_plant = parseInt(id_Plant);

    await prismaClient.group_of_Occurrences.create({
        data:{
            id: i,
            id_Plant: i_plant,
            id_Trail: i_trail,
            category: category,
            family: family,
            origin: origin,
            habit: habit
        }
    });

    }
}

export { CreateGpService }; 