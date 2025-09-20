const habitaciones = [
  { id: 1, noHabitacion: '110' },
  { id: 2, noHabitacion: '111' },
  { id: 3, noHabitacion: '150' }
];

const index = (req, res) => {
  res.render('habitacion22/index22', { habitaciones });
};

const create = (req, res) => {
  res.render('habitacion22/create22');
};

const store = (req, res) => {
  const { noHabitacion } = req.body;
  const nueva = { id: habitaciones.length + 1, noHabitacion };
  habitaciones.push(nueva);
  res.redirect('/habitacion22');
};

const show = (req, res) => {
  const { id } = req.params;
  const habitacion = habitaciones.find(h => h.id === parseInt(id, 10));
  if (!habitacion) return res.status(404).send('Habitación no encontrada');
  res.render('habitacion22/show22', { habitacion });
};

module.exports = { index, create, store, show };
