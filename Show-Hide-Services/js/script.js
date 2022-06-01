// Hide services on page load

const hideBtnService1 = document.getElementById('service-1').classList.add('hidden');

hideBtnService1;

const hideBtnService2 = document.getElementById('service-2').classList.add('hidden');

hideBtnService2;

const hideBtnService3 = document.getElementById('service-3').classList.add('hidden');

hideBtnService3;


// Toggle services (show/hide) on button press

const showBtnService1 = document.getElementById('btn-service-1').addEventListener('click', function() {
    document.getElementById('service-1').classList.toggle('hidden');
  });

  showBtnService1;

  const showBtnService2 = document.getElementById('btn-service-2').addEventListener('click', function() {
    document.getElementById('service-2').classList.toggle('hidden');
  });

  showBtnService2;

  const showBtnService3 = document.getElementById('btn-service-3').addEventListener('click', function() {
    document.getElementById('service-3').classList.toggle('hidden');
  });

  showBtnService3;