import {Icons} from '@models/Icons.enum';


export function buildTree(list: FlatNode[]): NodeType[] {
  const byId = new Map<string, NodeType>();

  for (const item of list) {
    let icon = null
    switch (item.type) {
      case "organization":
        icon = Icons.BuildingOffice;
        break
      case "place":
        icon = Icons.MapPin;
        break
      case "location":
        icon = Icons.Home;
        break
      default:
        icon = Icons.Folder;
    }
    byId.set(item.id, { ...item, icon: icon, children: [] });
  }

  const roots: NodeType[] = [];

  // 2) цепляем к родителям
  for (const item of list) {
    const node = byId.get(item.id)!;
    const pid = item.parentId;

    if (pid == null || pid === "" || !byId.has(pid)) {
      // корень (или родитель отсутствует)
      roots.push(node);
    } else {
      byId.get(pid)!.children.push(node);
    }
  }
  for (const root of roots) {
    root.id = 'root'
  }

  return roots;
}
