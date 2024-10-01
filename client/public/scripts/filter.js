
export const filterTrails = (searchInput, trails) => {
  const query = searchInput.value.toLowerCase().trim();

  const filteredTrails = trails.filter(
    (trail) =>
      trail.parktrailname.toLowerCase().includes(query) ||
      trail.distance.toString().includes(query)
  );

  return filteredTrails;
};
