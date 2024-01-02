function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxVisiblePages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return pages;
    }

    const halfMax = Math.floor(maxVisiblePages / 2);
    const start = Math.max(1, currentPage - halfMax);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    const visiblePages = [];
    if (start > 1) {
      visiblePages.push(1);
      if (start > 2) {
        visiblePages.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        visiblePages.push('...');
      }
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center text-gray-600">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 mr-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${page === currentPage ? 'bg-gray-200 text-gray-900 font-medium' : 'hover:bg-gray-100'}`}
        >
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 ml-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}

export default Pagination;
