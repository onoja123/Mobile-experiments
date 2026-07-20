import { useCallback, useRef, useState } from "react";
import * as Haptics from "expo-haptics";

import type { DeletedFolder, Folder, FolderToast } from "@/types";

export function useFolderList(initialFolders: Folder[]) {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const [toast, setToast] = useState<FolderToast | null>(null);

  const foldersRef = useRef(folders);
  foldersRef.current = folders;
  const deletedRef = useRef<DeletedFolder | null>(null);

  const removeFolder = useCallback((item: Folder) => {
    const index = foldersRef.current.findIndex((f) => f.id === item.id);
    deletedRef.current = { item, index };
    setFolders((prev) => prev.filter((f) => f.id !== item.id));
    setToast({ item, key: Date.now() });
  }, []);

  const undoRemove = useCallback(() => {
    const deleted = deletedRef.current;
    if (deleted) {
      setFolders((prev) => {
        const next = [...prev];
        next.splice(Math.min(deleted.index, next.length), 0, deleted.item);
        return next;
      });
      deletedRef.current = null;
      Haptics.selectionAsync();
    }
    setToast(null);
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  return { folders, toast, removeFolder, undoRemove, dismissToast };
}
