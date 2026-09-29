function getPageMetadata(totalItems, pageSize, currentPage) {
  if (totalItems === 0) {
    return {
      totalPages: 0,
      startItem: 0,
      endItem: 0,
      hasPrev: false,
      hasNext: false,
    };
  }

  const totalPages = Math.ceil(totalItems / pageSize);

  const startItem = (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(currentPage * pageSize, totalItems);

  const hasPrev = currentPage > 1;

  const hasNext = currentPage < totalPages;

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev,
    hasNext,
  };
}

console.log(console.log(getPageMetadata(24, 5, 3)));
console.log(getPageMetadata(95, 10, 10));
// {
//   totalPages: 10,
//   startItem: 91,
//   endItem: 95,
//   hasPrev: true,
//   hasNext: false
// }

console.log(getPageMetadata(24, 5, 3));
// {
//   totalPages: 5,
//   startItem: 11,
//   endItem: 15,
//   hasPrev: true,
//   hasNext: true
// }

console.log(getPageMetadata(0, 10, 1));
// {
//   totalPages: 0,
//   startItem: 0,
//   endItem: 0,
//   hasPrev: false,
//   hasNext: false
// }

console.log(getPageMetadata(100, 10, 1));
// {
//   totalPages: 10,
//   startItem: 1,
//   endItem: 10,
//   hasPrev: false,
//   hasNext: true
// }

console.log(getPageMetadata(100, 10, 10));
// {
//   totalPages: 10,
//   startItem: 91,
//   endItem: 100,
//   hasPrev: true,
//   hasNext: false
// }

console.log(getPageMetadata(100, 10, 5));
// {
//   totalPages: 10,
//   startItem: 41,
//   endItem: 50,
//   hasPrev: true,
//   hasNext: true
// }

console.log(getPageMetadata(101, 10, 11));
// {
//   totalPages: 11,
//   startItem: 101,
//   endItem: 101,
//   hasPrev: true,
//   hasNext: false
// }

console.log(getPageMetadata(1, 1, 1));
// {
//   totalPages: 1,
//   startItem: 1,
//   endItem: 1,
//   hasPrev: false,
//   hasNext: false
// }

console.log(getPageMetadata(10, 3, 1));
// {
//   totalPages: 4,
//   startItem: 1,
//   endItem: 3,
//   hasPrev: false,
//   hasNext: true
// }

console.log(getPageMetadata(10, 3, 4));
// {
//   totalPages: 4,
//   startItem: 10,
//   endItem: 10,
//   hasPrev: true,
//   hasNext: false
// }

console.log(getPageMetadata(50, 7, 4));
// {
//   totalPages: 8,
//   startItem: 22,
//   endItem: 28,
//   hasPrev: true,
//   hasNext: true
// }

console.log(getPageMetadata(50, 7, 8));
// {
//   totalPages: 8,
//   startItem: 50,
//   endItem: 50,
//   hasPrev: true,
//   hasNext: false
// }
