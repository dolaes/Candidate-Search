import type Candidate from "../interfaces/Candidate.interface";

type CandidateProps = {
    currentCandidate: Candidate;
};

const CandidateCard = ({ currentCandidate }: CandidateProps) => {
    return (
        <div className="card">
            <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name} Avatar`}></img>
            <div className="card-content">
                <h2 dangerouslySetInnerHTML={{
                    __html: currentCandidate.name
                        ? `${currentCandidate.name} <i>(${currentCandidate.login})</i>`
                        : `${currentCandidate.login}`
                }}></h2>
                <p><strong>Location:</strong> {currentCandidate.location ? `${currentCandidate.login}` : `N/A`}</p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: currentCandidate.email
                            ? `<strong>Email:</strong> <a href="mailto:${currentCandidate.email}">${currentCandidate.email}</a>`
                            : `<strong>Email:</strong> N/A`
                    }}
                ></p>
                <p><strong>Company:</strong> {currentCandidate.company ? `${currentCandidate.company}` : `N/A`}</p>
                <p><strong>Bio:</strong> {currentCandidate.bio ? `${currentCandidate.bio}` : `N/A`}</p>
            </div>
        </div >
    )
}

export default CandidateCard;