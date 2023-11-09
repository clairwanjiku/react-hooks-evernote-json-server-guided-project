import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './completed/Navbar';
import DisplayAnimal from './completed/DisplayAnimal';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedLetter, setSortedLetter] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);



  return ()
  <div>

    </div>