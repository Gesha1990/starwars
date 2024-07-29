'use client';
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Connection
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { getNumberFromString, getStarShipEdgesOrNodes } from '@/utils/utils';
import {
  Character,
  Film,
  FlowTreeProps,
  Starship
} from '@/interfaces/interfaces';

const initialNodes = (
  character: Character,
  films: Film[],
  starWarsShips: Starship[]
) => {
  const characterId = getNumberFromString(character.url);

  const filmsNodes = films.map((film, key) => {
    return {
      id: `provider2-${film.episode_id}`,
      data: { label: `${film.title}` },
      position: { x: key * 150, y: 100 },
      width: 100
    };
  });
  const starShipsNodes = getStarShipEdgesOrNodes(starWarsShips, false);

  return [
    {
      id: `provider-${characterId}`,
      data: {
        label: character.name
      },
      position: { x: 250, y: 5 }
    },
    ...filmsNodes,
    ...starShipsNodes
  ];
};

const initialEdges = (
  character: Character,
  films: Film[],
  starWarsShips: Starship[]
) => {
  const arrFilms = films.map((film) => {
    const characterId = getNumberFromString(character.url);
    return {
      id: `provider2-${film.episode_id}`,
      source: `provider-${characterId}`,
      target: `provider2-${film.episode_id}`
    };
  });

  const shipsArr = getStarShipEdgesOrNodes(starWarsShips, true);

  return [...arrFilms, ...shipsArr];
};

export const FlowTree = ({
  character,
  films,
  starWarsShips
}: FlowTreeProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialNodes(character, films, starWarsShips)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialEdges(character, films, starWarsShips)
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
