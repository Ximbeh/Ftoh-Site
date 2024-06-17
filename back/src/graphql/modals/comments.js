export const TypeDefs = /*Graphql*/ `
    type Query{
        comments:[Comment]
    }


    type Comment{
        _id: ID
        text: String
        email: String

        user: User
    }
`

export const resolvers = {
    Query:{
        comments:(obj, arg, {mongo}) => {
            return mongo.comments.find().limit(20).toArray()
        }
    },

    Comment:{
        user: ({email}, arg, {mongo})=>{
            return mongo.users.findOne({email})
        }
    }


}