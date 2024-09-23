// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    readonly avatar_url: string;
    readonly login: string | null;
    readonly name: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly bio: string | null;
}

export default Candidate;