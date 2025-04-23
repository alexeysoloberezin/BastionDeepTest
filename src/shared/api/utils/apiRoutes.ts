const API_ROUTES: Record<string, string> = {
    "attack": "/attack",
    "attackCreate": "/attack/create",
    "attackStatus": "/attack/status",
    "groupvuln": "/groupvuln",
    "certvuln": "/certvuln",
    "dc": "/dc",
    "filevuln": "/filevuln",
    "kerberos": "/kerberos",
    "load": "/load",
    "scanvuln": "/scanvuln",
} as const

export const REVERSED_API_ROUTES = Object.entries(API_ROUTES).reduce(
    (acc, [key, value]) => {
        acc[value] = key;
        return acc;
    },
    {} as Record<string, keyof typeof API_ROUTES>
);

export default API_ROUTES