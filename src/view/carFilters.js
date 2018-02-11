const renderFilters = ({orderBy = 'Price', group = false}) =>
  `
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Sort by: </label>
      <div class="form-check">
        <input class="form-check-input sortby" type="radio" name="sortby" value="Price" ${orderBy === 'Price' ? `checked`:''}>
        <label class="form-check-label" for="sortby">
          Price
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input sortby" type="radio" name="sortby" value="Model" ${orderBy === 'Model' ? `checked`:''}>
        <label class="form-check-label" for="sortby">
          Model Name
        </label>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label for="filter"><input type="checkbox" ${group ? 'checked': ''} id="group"> Group by Vendor</label>
    </div>
  </div>
  </form>
  `;

export default renderFilters;
