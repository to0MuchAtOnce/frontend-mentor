//  Get data from JSON file
async function getData() {
  const data = await fetch('./data.json');
  const body = await data.json();

  function getMeasuredTime(time) {
    switch (time) {
      case 'daily':
        return 'Yesterday';
        break;
      case 'weekly':
        return 'Last Week';
        break;
      case 'monthly':
        return 'Last Month';
        break;
      default:
        return;
    }
  }

  function generateCardHTML(data) {
    const htmlString = Object.entries(data)
      .map(time => {
        const timePeriod = time[0];
        const measureTime = getMeasuredTime(timePeriod);
        return `
    <div class="card work-card" id="card-${timePeriod}" aria-labelledby="tab-${timePeriod}" aria-hidden=${timePeriod} === 'daily' ? 'false' : 'true'>
      <div class="card-top work-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Work</h2>
          <i class="ph-bold ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hrs</p> <!-- daily -->
          <small>Yesterday - <span class="">7hrs</span></small> <!-- daily -->
        </div>
      </div>
    </div>

    <div class="card play-card">
      <div class="card-top play-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Play</h2>
          <i class="ph-bold  ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hr</p> <!-- daily -->
          <small>Yesterday - <span class="">2hrs</span></small> <!-- daily -->
        </div>
      </div>
    </div>

    <div class="card study-card">
      <div class="card-top study-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Study</h2>
          <i class="ph-bold  ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hrs</p> <!-- daily -->
          <small>Yesterday - <span class="">1hr</span></small> <!-- daily -->
        </div>
      </div>
    </div>

    <div class="card exercise-card">
      <div class="card-top exercise-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Exercise</h2>
          <i class="ph-bold  ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hr</p> <!-- daily -->
          <small>Yesterday - <span class="">1hr</span></small> <!-- daily -->
        </div>
      </div>
    </div>

    <div class="card social-card">
      <div class="card-top social-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Social</h2>
          <i class="ph-bold  ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hr</p> <!-- daily -->
          <small>Yesterday - <span class="">3hrs</span></small> <!-- daily -->
        </div>
      </div>
    </div>

    <div class="card care-card">
      <div class="card-top care-card-top"></div>
      <div class="card-bottom">
        <div class="card-btm-head">
          <h2 class="card-title">Self Care</h2>
          <i class="ph-bold  ph-dots-three"></i>
        </div>
        <div class="card-btm-main">
          <p class="main-hrs">...hrs</p> <!-- daily -->
          <small>Yesterday - <span class="">1hr</span></small> <!-- daily -->
        </div>
      </div>
    </div>
        `;
      })
      .join('');
    return htmlString;
  }

  // Loop through each object and filter out the daily, monthly and weekly into an object with the type.
  const dailyData = body.map(type => ({
    time: type.timeframes.daily,
    title: type.title,
  }));

  const weeklyData = body.map(type => ({
    time: type.timeframes.weekly,
    title: type.title,
  }));

  const monthlyData = body.map(type => ({
    time: type.timeframes.monthly,
    title: type.title,
  }));

  //Pass each array to a function that will build the neccassary template
  generateCardHTML({
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  });
}
getData();
