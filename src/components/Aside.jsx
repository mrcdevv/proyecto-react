import DateFilter from "./DateFilter";

function Aside() {
  let years = [];

  const date = new Date();
  const thisYear = date.getFullYear();

  for (let i = 1990; i <= thisYear; i++) {
    years.push(i);
  }

  const yearsButtons = years.map((year) => (
    <DateFilter year={year} />
  ));

  return (
    <aside className="w-[14.6875em] pt-[15px] ">
      <p className="text-base mb-1.5 ">Release date</p>
      <div className="flex flex-wrap">
        {yearsButtons.reverse()}
      </div>
    </aside>
  );
}

export default Aside;
