import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; //, searchGithubUser

import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: '',
    login: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
  })

  const nextCandidate = async () => {
    const data: Candidate = await searchGithub();
    setCurrentCandidate(data);
  }

  const addToPotentialCandidatesList = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
  };

  useEffect(() => { nextCandidate() }, []);

  return (
    <div>
      <h1>CandidateSearch {currentCandidate.name}</h1>
      <CandidateCard currentCandidate={currentCandidate}></CandidateCard>
      <div>
        <button onClick={() => nextCandidate()}>-</button>
        <button onClick={() => {
          addToPotentialCandidatesList();
          nextCandidate();
        }
        }>+</button>
      </div>
    </div>
  );

};

export default CandidateSearch;
