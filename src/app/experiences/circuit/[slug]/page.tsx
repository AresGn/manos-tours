import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCircuitBySlug } from '@/data/circuits';
import CircuitDetailClient from '@/components/experiences/CircuitDetailClient';

interface CircuitPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CircuitPageProps): Promise<Metadata> {
  const { slug } = await params;
  const circuit = getCircuitBySlug(slug);

  if (!circuit) {
    return {
      title: 'Circuit non trouvé | Manos Tours',
    };
  }

  return {
    title: `${circuit.nom} | Circuits Manos Tours Grand-Popo`,
    description: circuit.description,
    keywords: `${circuit.nom}, Grand-Popo, Bénin, circuit, ${circuit.categories.join(', ')}, Manos Tours`,
    openGraph: {
      title: `${circuit.nom} | Manos Tours Grand-Popo`,
      description: circuit.description,
      images: [circuit.imageHero],
    },
  };
}

export default async function CircuitPage({ params }: CircuitPageProps) {
  const { slug } = await params;
  const circuit = getCircuitBySlug(slug);

  if (!circuit) {
    notFound();
  }

  return <CircuitDetailClient circuit={circuit} />;
}

// Génération statique des pages pour tous les circuits
export async function generateStaticParams() {
  const { circuits } = await import('@/data/circuits');
  
  return circuits.map((circuit) => ({
    slug: circuit.slug,
  }));
}
