import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    statement: String,
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;