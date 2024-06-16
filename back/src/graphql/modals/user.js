export const TypeDefs =  /*Graphql*/ `
extend type Query{
    user: User
}

type User{
    id: Int
    name: String
}
`;

export const resolvers = {

    Query:{
        user: ()=> {
            return{
                id: 1,
                name: "Bracchio"
            }
        }
    },
    User:{
        name:(obj)=>{
            return obj.name.toUpperCase()
        }
    }
}