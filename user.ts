import mongoose, { Document, Schema, Model } from 'mongoose'

// Type definitions for build method
interface UserAttrs {
  email: string
  password: string
}

// Type definition for Document
interface UserDoc extends Document {
  email: string
  password: string
}

// Type definition for Model (Collection)
interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): Document
}

// Schema for Document
const userSchema: Schema<UserDoc> = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User: UserModel = mongoose.model<UserDoc, UserModel>('User', userSchema)

// User.build({ email: 'test@test.com', password: 'test123' })

export { User }
