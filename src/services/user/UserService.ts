import prismaClient from "../../prisma";

class UserService{
    async ex(userID: string){
        const user = await prismaClient.pesquisador.findFirst({
            where: {
                id: userID,
            }, select: {
                nome: true,
                email: true,
            }
        });
        return user;
    }
}
export { UserService }