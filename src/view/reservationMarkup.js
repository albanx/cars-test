const renderReservation = reservation => `
  <div class="card text-white bg-primary">
    <div class="card-body">
      <h5 class="card-title">Reservation Information</h5>
      <p class="card-text">
        <ul>
          <li> 
            Reservation starts ${reservation.getDateStart()} from ${reservation.getLocationNameStart()}
          </li>
          <li> 
            Reservation ends ${reservation.getDateEnd()} from ${reservation.getLocationNameEnd()}
          </li>
        </ul>
      </p>
    </div>
  </div>
`;

export default renderReservation;
