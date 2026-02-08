function ProjectsFilter({ categories, activeCategory, setActiveCategory }) {
 return (
  <ul className="projects__filter">
   {categories &&
    categories.map((category, index) => {
     return (
      <li
       key={index}
       className={activeCategory === index ? "active" : ""}
       onClick={() => setActiveCategory(index)}
       style={{
        animationDelay: `${0.1 * index + 1.5}s`,
       }}
      >
       {category}
      </li>
     );
    })}
  </ul>
 );
}

export default ProjectsFilter;
