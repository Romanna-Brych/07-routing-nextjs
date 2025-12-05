import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';

interface Props {
  params: Promise<{ slug: string[] }>;
}

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;

  const tag = slug[0] === 'all' ? undefined : slug[0];
  const res = await fetchNotes('', 1, tag);

  return <>{res && res.notes.length && <NoteList notes={res.notes} />}</>;
};

export default NotesByCategory;
