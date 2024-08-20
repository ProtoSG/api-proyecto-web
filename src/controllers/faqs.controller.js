import { get_faqs } from "../services/faqs.services";

const get_all_faqs = async (_, res) => {
  try {
    const { success, data } = await get_faqs();
    if (success) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: data });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  get_all_faqs
}
