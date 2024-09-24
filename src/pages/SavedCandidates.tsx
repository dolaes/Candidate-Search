import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface'; // Import your Candidate interface

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('potentialCandidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>
                <img
                  src={candidate.avatar_url}
                  alt={candidate.login}
                  style={{ width: '50px', borderRadius: '50%' }}
                />
              </td>
              <td>
                {candidate.name ? (
                  <>
                    {candidate.name} <i>({candidate.login})</i>
                  </>
                ) : (
                  candidate.login
                )}
              </td>
              <td>{candidate.location || 'N/A'}</td>
              <td>
                <a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a>
              </td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'N/A'}</td>
              <td>
                <button
                  onClick={() => handleReject(index)}
                  style={{
                    backgroundColor: 'red',
                    border: 'none',
                    borderRadius: '50%',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    fontSize: '16px',
                  }}
                >
                  &#x2212;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleReject(index: number) {
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  }
};

export default SavedCandidates;