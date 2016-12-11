'use strict';

const express = require('express');
const volleyball = require('volleyball');


const app = express();

app.use(volleyball);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public/images'));

const puppies = [{
  id: 1,
  name: 'Max',
  owner: 'Amy',
  image: 'Amy-Max.jpg'
}, {
  id: 2,
  name: 'Katie',
  owner: 'Amy',
  image: 'Amy-Katie.jpg'
}, {
  id: 3,
  name: 'Queen BowBow',
  owner: 'Yoo-Nah',
  image: 'yoonah-queen-bowbow.jpg'
}, {
  id: 4,
  name: 'Tribble',
  owner: 'Sean',
  image: 'seans-tribble.jpg'
}, {
  id: 5,
  name: 'Rosie',
  owner: 'Beth',
  image: 'beth-rosie.jpg'
},{
  id: 6,
  name: 'Oliver and Calvin',
  owner: 'Evan',
  image: 'evan-oliverNcalvin.jpg'
},{
  id: 7,
  name: 'MC',
  owner: 'Joe',
  image: 'JoesPoodleMC.jpg'
},{
  id: 8,
  name: 'Booker',
  owner: 'Joey',
  image: 'joey-booker.jpg'
}];

app.get('/api/puppies', function (req, res) {
  console.log("In /api/puppies");
  res.json(puppies.map(({id, name}) => ({id, name})));
});

app.get('/api/puppies/:id', function (req, res) {
  const aPuppy = puppies.find(p => p.id === Number(req.params.id));
  if (!aPuppy) res.status(404).end();
  else res.json(aPuppy);
});

app.listen(3001, function () {
  console.log('Server listening on port', 3001);
});

