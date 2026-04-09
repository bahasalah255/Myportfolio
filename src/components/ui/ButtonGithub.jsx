import { GitHubStarsButton } from '@/components/animate-ui/components/buttons/github-stars';

export default function GitHubStarsButtonDemo({ variant, size, repo, className }) {
  return (
    <GitHubStarsButton
      variant={variant}
      size={size}
      username="bahasalah255"
      repo={repo}
      className={className}
    />
  );
}