import DateFilter from "./DateFilter";

function Aside() {
  let years = [];

  const date = new Date();
  const thisYear = date.getFullYear();

  for (let i = 1990; i <= thisYear; i++) {
    years.push(i);
  }

  const yearsButtons = years.map((year) => (
    <DateFilter key={year} year={year} />
  ));

  return (
    <aside className="w-[14.6875em] pt-[15px] ">
      <p className="text-lg mb-1.5 font-bold">Año de lanzamiento</p>
      <div className="flex flex-wrap">
        {yearsButtons.reverse()}
      </div>
    </aside>
  );
}

export default Aside;
