interface CategoriesProps {
  categories: string[];
  onClick: (category: string) => void;
  selected: string;
}

export default function Categories({
  categories,
  onClick,
  selected,
}: CategoriesProps) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b text-white border-white mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer text-white hover:text-[#FBBF24] ${
              category === selected && "text-[#FBBF24]"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
