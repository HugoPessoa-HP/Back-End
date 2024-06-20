import prismaClient from "../../prisma";

class GetUsers{
    async ex(){

        const users = await prismaClient.researcher.findMany({
            select: {
                name: true,
                email: true
            }
        })

        return users;
    }
}

export { GetUsers }