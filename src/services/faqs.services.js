import { connection } from "../database/connection.db";
import { Faqs } from "../models/faqs.model";

const post_faqs = async (faq) => {
  try {
    const query = 'INSERT INTO faqs (id, question, answer) VALUES (?, ?, ?)';
    const values = [faq.question, faq.answer];
    await connection.execute(query, values);
    return { success: true, message: "FAQ added succesfully" }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

const get_faqs = async () => {
  try {
    const query = 'SELECT * FROM faqs';
    const { rows } = await connection.execute(query);

    const faqs = [];
    rows.forEach(row => {
      const faq = new Faqs(row.id, row.question, row.answer);
      faqs.push(faq);
    });
    return { success: true, data: faqs };
  } catch (error) {
    return { success: false, message: error.message }
  }
}

export default {
  post_faqs,
  get_faqs
}
