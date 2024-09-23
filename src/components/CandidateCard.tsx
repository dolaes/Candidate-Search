import type Candidate from "../interfaces/Candidate.interface";

type CandidateProps = {
    currentCandidate: Candidate;
};

const CandidateCard = ({currentCandidate}: CandidateProps) => {
    return(
        <div className="card">
            <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name} Avatar`}></img>
            <div className="card-content">
                <h2>{currentCandidate.name} <i>{currentCandidate.login}</i></h2>
                <p><strong>Location:</strong> {currentCandidate.location}</p>
                <p><strong>Email:</strong> <a href={`mailto:${currentCandidate.email}`}></a></p>
                <p><strong>Company:</strong> {currentCandidate.company}</p>
                <p><strong>Bio:</strong> {currentCandidate.bio}</p>
            </div>
        </div>
    )
}

export default CandidateCard;