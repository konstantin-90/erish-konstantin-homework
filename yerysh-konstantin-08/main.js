const yearBirth = prompt ('enter your year of birth');

const yourCity = prompt('enter your city where you live');
switch (true) {
  case yourCity ==='Киев':
    alert('ты живешь в столице Украины');
    break;

  case yourCity === 'Вашингтон':
    alert('ты живешь в столице США');
    break;

  case yourCity === 'Лондон':
    alert('ты живешь в столице Англии');
    break;

  case yourCity === 'string':
    alert(`ты живешь в городе + ${yourCity}`);
    break;

  case yourCity === null:
    alert('жаль, что не захотел ввести свой город');
    break;
}

let likeSport = prompt ('enter your favorite sport(бокс, легкая атлетика, футбол)');
switch (true) {
  case likeSport ==='бокс':
    alert('ты живешь в столице Украины');
    break;

  case likeSport === 'легкая атлетика':
    alert('ты живешь в столице США');
    break;

  case likeSport === 'футбол':
    alert('ты живешь в столице Англии');
    break;

  case likeSport === 'string':
    alert(`твой любимый вид спорта + ${likeSport}`);
    break;

  case likeSport === null:
    alert('жаль, что не захотел ввести свой любивый вид спорта');
    break;
}

alert (`твоя дата рождения ${yearBirth}, ты живешь в городе ${yourCity}. Твоим любимым видом спорта является ${likeSport}`);