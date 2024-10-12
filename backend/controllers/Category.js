const MAIN_CATEGORIES = 0;
const PANCAKE_CATEGORIES = 1;

const categories = [
  {
    id: 1,
    name: 'Category 1',
  },
  {
    id: 2,
    name: 'Category 2',
  },
  {
    id: 3,
    name: 'Category 3',
  },
  {
    id: 4,
    name: 'Category 4',
  },
  {
    id: 5,
    name: 'Category 5',
  },
];

export async function getCategories(req, res) {
  try {
    const categoryType = req.query.type;

    if (!categoryType) {
      return res.status(200).json(categories);
    }

    if (categoryType != MAIN_CATEGORIES && categoryType != PANCAKE_CATEGORIES) {
      return res.status(400).json({ detail: 'Invalid category type' });
    }

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ detail: error.message });
  }
}
