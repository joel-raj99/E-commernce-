import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  secondaryphone: { type: String, required: true },
  landmark:{ type: String, required: true },

},
{
    timestamps: true,
});
const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default Profile;