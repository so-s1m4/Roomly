declare type FlatNode = {
  id: string;
  parentId: string | null;
  type: 'organization' | 'place' | 'location' | 'user' | string;
  label: string;
};

declare type NodeType = FlatNode & {
  icon: string;
  children: NodeType[];
}
