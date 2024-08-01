import OpenAI from "openai";

exports.postQuery = async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4o-mini",
      });
    
    console.log(completion.choices[0]);
    return res.status(200).json({ message: "Submit Query", data: completion });
  } catch (error) {
    return res
      .status(404)
      .json({ error: error.message || "There was an error." });
  }
};