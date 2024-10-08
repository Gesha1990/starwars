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
import {
  getFilmsEdgesOrNodes,
  getNumberFromString,
  getStarShipEdges,
  getStarShipNodes
} from '@/utils/utils';
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
  const mainCharacterNode = {
    id: `provider-${characterId}`,
    data: {
      label: character.name
    },
    position: { x: 250, y: 5 }
  };
  const filmsNodes = getFilmsEdgesOrNodes(films, character.url, false);
  const starShipsNodes = getStarShipNodes(starWarsShips);

  return [mainCharacterNode, ...filmsNodes, ...starShipsNodes];
};

const initialEdges = (
  character: Character,
  films: Film[],
  starWarsShips: Starship[]
) => {
  const arrFilmsEdges = getFilmsEdgesOrNodes(films, character.url, true);

  const shipsArrEdges = getStarShipEdges(starWarsShips);

  return [...arrFilmsEdges, ...shipsArrEdges];
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
